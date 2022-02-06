class Task < ApplicationRecord
  belongs_to :status
  belongs_to :user

  validates :is_archived, inclusion: [true, false]

  scope :archived?, -> { where(is_archived: true) }
  scope :active?, -> { where(is_archived: false) }
end
