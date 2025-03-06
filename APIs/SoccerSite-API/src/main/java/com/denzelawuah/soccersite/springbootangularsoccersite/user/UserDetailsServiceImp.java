package com.denzelawuah.soccersite.springbootangularsoccersite.user;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserDetailsServiceImp implements UserDetailsService {

    private final UsersDAO _usersDAO;

    public UserDetailsServiceImp(UsersDAO usersDAO) {
        _usersDAO = usersDAO;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return _usersDAO.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("User n ot found"));
    }
}
