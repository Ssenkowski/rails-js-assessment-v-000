class CreateJsonWebTokens < ActiveRecord::Migration[5.1]
  def change
    create_table :json_web_tokens do |t|

      t.timestamps
    end
  end
end
