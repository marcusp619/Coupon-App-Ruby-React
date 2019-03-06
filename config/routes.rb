Rails.application.routes.draw do
  resources :home, only:[:index, :show]
  resources :retailer, only:[:index, :show]
end
