Rails.application.routes.draw do
  # root 'api_v1_greetings#index'

  namespace :api do
    namespace :v1 do
      resources :greetings
    end
  end    
end
