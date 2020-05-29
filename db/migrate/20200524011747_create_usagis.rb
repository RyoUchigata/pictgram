class CreateUsagis < ActiveRecord::Migration[5.2]
  def change
    create_table :usagis do |t|

      t.timestamps
    end
  end
end
