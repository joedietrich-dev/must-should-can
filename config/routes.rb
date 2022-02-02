Rails.application.routes.draw do
  resources :users
  resources :tasks, only: [:index, :create]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Session Routes
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/me", to: "sessions#show"

  # Defines the root path route ("/")
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
