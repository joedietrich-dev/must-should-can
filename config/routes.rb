Rails.application.routes.draw do
  namespace :api do
    
    namespace :tasks do
      resources :status_resets, only: [:create]
      get 'archived', to: 'archived_tasks#index'
      get 'active', to: 'active_tasks#index'
    end
    
    resources :users, only: [:create]
    resources :tasks
    resources :notes, only: [:create, :destroy, :update]

    # Session Routes
    post "/login", to: "sessions#create"
    delete "/logout", to: "sessions#destroy"
    get "/me", to: "sessions#show"
  end

  # Defines the root path route ("/")
  get '*path', to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
