Rails.application.routes.draw do
  resources :users do 
    resources :posts do
      resources :comments
    end
  end

  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  get '/posts', to: 'posts#index' 
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
