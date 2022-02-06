Rails.application.routes.draw do
   namespace :tasks do
    resources :status_resets, only: [:create]
    get 'archived', to: 'archived_tasks#index'
    get 'active', to: 'active_tasks#index'
  end
  resources :users
  resources :tasks, only: [:index, :create, :destroy, :update]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Session Routes
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/me", to: "sessions#show"

  # Defines the root path route ("/")
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
