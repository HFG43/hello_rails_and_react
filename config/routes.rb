Rails.application.routes.draw do
  root 'root#index'
  
  namespace :api do
    namespace :v1 do
      get "greetings/", to: "greetings#daily_greeting"
    end
  end  
end
