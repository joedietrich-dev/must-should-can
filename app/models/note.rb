class Note < ApplicationRecord
  belongs_to :task

  validates :is_complete, inclusion: [true, false]
end
