Rails.application.routes.draw do
  root 'home#index'

  resources :subjects do
    resources :measurements
  end

  post 'auth/login', to: 'authentication#authenticate'
  post 'signup', to: 'users#create'
end
