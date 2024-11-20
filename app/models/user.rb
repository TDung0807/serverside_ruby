class User < ApplicationRecord
    has_secure_password
    validates :email, uniqueness: true
    def as_json(opts = {})
        super(opts.merge(only: [:id, :email, :name]))
    end
end
