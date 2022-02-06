class TaskSerializer < ActiveModel::Serializer
  attributes :id, :description, :due_date, :is_archived, :completed_date, :created_at, :updated_at

  belongs_to :user
  belongs_to :status
end
