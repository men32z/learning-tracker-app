class User < ApplicationRecord
  has_secure_password

  has_many :measurements
  has_and_belongs_to_many :subjects

  
  validates_presence_of :name, :email, :password_digest
end
