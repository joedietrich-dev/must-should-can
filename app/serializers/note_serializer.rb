class NoteSerializer < ActiveModel::Serializer
  attributes :id, :contents, :complete
  belongs_to :task
end
