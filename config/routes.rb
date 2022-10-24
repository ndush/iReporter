Rails.application.routes.draw do
  resources :redflags, except:[:show] 

  resources :interventions, except: [:show]

  resources :users, only: [:index, :create, :show]

  get '/me', to: 'users#show'

  post '/signup', to: "users#create"


  post '/login', to: 'sessions#create'

  delete '/logout', to: 'sessions#destroy'
  
end
