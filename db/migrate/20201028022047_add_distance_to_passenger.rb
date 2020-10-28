class AddDistanceToPassenger < ActiveRecord::Migration[6.0]
  def change
    add_column :passengers, :distance, :string
  end
end
