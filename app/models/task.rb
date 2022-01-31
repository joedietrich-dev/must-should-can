class Task < ApplicationRecord
  belongs_to :status
  belongs_to :user
end
