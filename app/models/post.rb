class Post < ApplicationRecord

  def self.distance_calculation(file)
    bookings = []

    CSV.foreach(file.path, headers: true, :header_converters => [:downcase]) do |row|
      bookings << Booking.new(row.to_h)
    end
    Booking.import bookings, recursive: true
  end
end
