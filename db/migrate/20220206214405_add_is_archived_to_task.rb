class AddIsArchivedToTask < ActiveRecord::Migration[7.0]
  def change
    add_column :tasks, :is_archived, :boolean, null: false
  end
end
