class RenameNoteCompleteToIsComplete < ActiveRecord::Migration[7.0]
  def change
    rename_column(:notes, :complete, :is_complete)
  end
end
