Rails.application.routes.draw do
  root 'root#index'

  namespace :api do
    namespace :v1 do
      resources :greetings
    end
  end

  # get "/" => "rails/health#show", as: :rails_health_check
end
