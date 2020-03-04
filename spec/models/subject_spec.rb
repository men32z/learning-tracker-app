require 'rails_helper'

RSpec.describe Subject, type: :model do
  it { should have_many(:measurements).dependent(:destroy) }
  it { should have_and_belong_to_many(:users) }
  it { should validate_presence_of(:name) }
end
