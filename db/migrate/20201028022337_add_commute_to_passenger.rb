class AddCommuteToPassenger < ActiveRecord::Migration[6.0]
  def change
    add_column :passengers, :commute, :string
  end
end
