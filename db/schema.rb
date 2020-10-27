# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_10_27_221533) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "passengers", force: :cascade do |t|
    t.string "passenger"
    t.string "location"
    t.string "destination"
    t.string "timeslot"
    t.float "location_lat"
    t.float "location_long"
    t.float "destination_lat"
    t.float "destination_long"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["destination_lat", "destination_long"], name: "index_passengers_on_destination_lat_and_destination_long"
    t.index ["location_lat", "location_long"], name: "index_passengers_on_location_lat_and_location_long"
  end

  create_table "posts", force: :cascade do |t|
    t.text "description"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
