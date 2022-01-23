class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :password, :name
end
