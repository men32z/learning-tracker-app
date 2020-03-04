class Subject < ApplicationRecord
  has_many :measurements

  validates :name, presence: true
end
