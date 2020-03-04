Rails.application.routes.draw do
  root 'home#index'

  resources :subjects do
    resources :measurements
  end
end
