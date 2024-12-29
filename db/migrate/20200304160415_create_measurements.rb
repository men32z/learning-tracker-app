class CreateMeasurements < ActiveRecord::Migration[6.0]
  def change
    create_table :measurements do |t|
      t.date :date_m
      t.integer :units

      t.timestamps
    end
  end
end
