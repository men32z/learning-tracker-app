class AddUserRefToMeasurement < ActiveRecord::Migration[6.0]
  def change
    add_reference :measurements, :user, null: false, foreign_key: true
  end
end
