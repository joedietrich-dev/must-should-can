class TaskSerializer < ActiveModel::Serializer
  attributes :id, :description, :due_date, :completed_date

  belongs_to :user
  belongs_to :status
end
