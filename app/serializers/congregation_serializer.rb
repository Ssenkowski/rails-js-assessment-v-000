class CongregationSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :street, :territory_id, :publisher_id
  has_many :territories
  has_many :publishers
end
