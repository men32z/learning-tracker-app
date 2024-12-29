class Subject < ApplicationRecord
  has_many :measurements, dependent: :destroy
  has_and_belongs_to_many :users

  validates :name, presence: true
end
