class CreateSubjects < ActiveRecord::Migration[6.0]
  def change
    create_table :subjects do |t|
      t.string :name
      t.text :desc
      t.string :image

      t.timestamps
    end
  end
end
