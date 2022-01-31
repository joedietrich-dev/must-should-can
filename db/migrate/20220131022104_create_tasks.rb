class CreateTasks < ActiveRecord::Migration[7.0]
  def change
    create_table :tasks do |t|
      t.string :description
      t.belongs_to :status, null: false, foreign_key: true
      t.datetime :due_date
      t.datetime :completed_date
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
