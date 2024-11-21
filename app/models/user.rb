class User < ApplicationRecord
    has_secure_password
    validates :email, :username, uniqueness: true
    def as_json(opts = {})
        super(opts.merge(only: [:id, :username, :email, :name]))
    end
end
