class Passenger < ApplicationRecord
  geocoded_by :location_lat, :location_long, :destination_lat, :destination_long
  after_validation :reverse_geocode

  def self.process_upload(file_path)
    file_data = SmarterCSV.process(file_path)
    id_count = 1
    file_data.each do |row|
      begin
        id = id_count
        passenger = row[:passenger]
        location = row[:location]
        destination = row[:destination]
        timeslot = row[:timeslot]
        location_lat = geo_point_latitude(location)
        location_long = geo_point_longitude(location)
        destination_lat = geo_point_latitude(destination)
        destination_long = geo_point_longitude(destination)
        distance = calc_distance(location_lat,location_long, destination_lat, destination_long)
        commute = inbound_outbound_check(timeslot)


        Passenger.create!(
            passenger: passenger,
            location: location,
            destination: destination,
            timeslot: timeslot,
            location_lat: location_lat,
            location_long: location_long,
            destination_lat: destination_lat,
            destination_long: destination_long,
            distance: distance,
            commute: commute
        )
      rescue
        puts 'processing error'
        puts row.inspect
      end
      id_count = id_count + 1
      sleep 1
    end
  end

  def self.geo_point_latitude(value)
    Geocoder.search(value).first.latitude
  end

  def self.geo_point_longitude(value)
    Geocoder.search(value).first.longitude
  end

  def self.calc_distance(loc_lat, loc_long, des_lat, des_long)
    (Geocoder::Calculations.distance_between([loc_lat, loc_long],[des_lat, des_long]) * 1000).round
  end

  def self.inbound_outbound_check(timeslot)
    result = nil
    if(timeslot.include? "AM")
      result = "inbound"
    else
      result = "outbound"
    end
    return  result
  end

  def self.g_near(point, distance)
    where(
        'ST_DWithin(coords, :point, :distance)',
        { point: Geo.to_wkt(point), distance: distance * 1000 }
    )
  end

  def self.g_within_box(sw_point, ne_point)
    where(
        "coords && ST_MakeEnvelope(:sw_lon, :sw_lat, :ne_lon, :ne_lat, #{
        Geo::SRID
        })",
        {
            sw_lon: sw_point.longitude,
            sw_lat: sw_point.latitude,
            ne_lon: ne_point.longitude,
            ne_lat: ne_point.latitude
        }
    )
  end
end
