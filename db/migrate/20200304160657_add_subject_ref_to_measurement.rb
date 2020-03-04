class AddSubjectRefToMeasurement < ActiveRecord::Migration[6.0]
  def change
    add_reference :measurements, :subject, null: false, foreign_key: true
  end
end
