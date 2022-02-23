class CreateNotes < ActiveRecord::Migration[7.0]
  def change
    create_table :notes do |t|
      t.string :contents
      t.belongs_to :task, null: false, foreign_key: true
      t.boolean :complete

      t.timestamps
    end
  end
end
