class User < ApplicationRecord
  has_secure_password

  has_many :measurements
  has_and_belongs_to_many :subjects

  before_save :downcase_email

  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i.freeze

  validates_presence_of :name, :password_digest
  validates :email, presence: true, length: { maximum: 255 },
                    format: { with: VALID_EMAIL_REGEX }, uniqueness: { case_sensitive: false }

  def downcase_email
    self.email = email.downcase
  end
end
