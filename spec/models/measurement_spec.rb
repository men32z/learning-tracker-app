require 'rails_helper'

RSpec.describe Measurement, type: :model do
  it { should belong_to(:subject) }
  it { should belong_to(:user) }
  it { should validate_presence_of(:units) }
  it { should validate_presence_of(:date_m) }
end
