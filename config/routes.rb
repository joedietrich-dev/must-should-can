Rails.application.routes.draw do
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
