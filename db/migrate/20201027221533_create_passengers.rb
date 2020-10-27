class CreatePassengers < ActiveRecord::Migration[6.0]
  def change
    create_table :passengers do |t|
      t.string :passenger
      t.string :location
      t.string :destination
      t.string :timeslot
      t.float :location_lat
      t.float :location_long
      t.float :destination_lat
      t.float :destination_long

      t.timestamps

      t.index %i[location_lat location_long]
      t.index %i[destination_lat destination_long]
    end
  end
end
