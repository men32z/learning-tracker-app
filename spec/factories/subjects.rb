FactoryBot.define do
  factory :subject do
    name { Faker::Educator.subject }
    desc { Faker::Lorem.paragraph(sentence_count: 2) }
  end
end
