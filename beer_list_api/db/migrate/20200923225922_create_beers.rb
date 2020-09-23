class CreateBeers < ActiveRecord::Migration[6.0]
  def change
    create_table :beers do |t|
      t.string :brand
      t.string :name
      t.string :style
      t.decimal :abv
      t.string :flavor

      t.timestamps
    end
  end
end
