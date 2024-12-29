Rails.application.routes.draw do
  root 'home#index'
  scope '/api' do
    get 'subjects/mine', to: 'subjects#my_subjects'
    get 'measurements', to: 'measurements#my_measurements'
    resources :subjects do
      resources :measurements
    end

    post 'auth/login', to: 'authentication#authenticate'
    post 'signup', to: 'users#create'
    post 'register_subject', to: 'user_subjects#create'
    delete 'unregister_subject/:subject_id', to: 'user_subjects#destroy'
  end
  get '*path', to: 'home#index'
end
