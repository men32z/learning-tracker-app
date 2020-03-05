class Measurement < ApplicationRecord
  belongs_to :user
  belongs_to :subject
  validates :date_m, presence: true
  validates :units, presence: true, length: { minimum: 1 }
  validate :date_cannot_be_after_today

  def date_cannot_be_after_today
    errors.add(:date_m, "can't set a future date") if date_m.present? && date_m > Date.today
  end
end
