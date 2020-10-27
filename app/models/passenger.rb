class Passenger < ApplicationRecord

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

        Passenger.create!(
            passenger: passenger,
            location: location,
            destination: destination,
            timeslot: timeslot,
            location_lat: location_lat,
            location_long: location_long,
            destination_lat: destination_lat,
            destination_long: destination_long,
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
end
