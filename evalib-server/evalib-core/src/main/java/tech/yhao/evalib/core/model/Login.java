package tech.yhao.evalib.core.model;

import java.util.Date;
import java.util.UUID;

public class Login {
    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column public.t_login.id
     *
     * @mbg.generated Wed Aug 22 13:45:02 CST 2018
     */
    private UUID id;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column public.t_login.username
     *
     * @mbg.generated Wed Aug 22 13:45:02 CST 2018
     */
    private String username;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column public.t_login.password
     *
     * @mbg.generated Wed Aug 22 13:45:02 CST 2018
     */
    private String password;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column public.t_login.last_login_at
     *
     * @mbg.generated Wed Aug 22 13:45:02 CST 2018
     */
    private Date lastLoginAt;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column public.t_login.user_id
     *
     * @mbg.generated Wed Aug 22 13:45:02 CST 2018
     */
    private UUID userId;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column public.t_login.state
     *
     * @mbg.generated Wed Aug 22 13:45:02 CST 2018
     */
    private ActivationState state;

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column public.t_login.id
     *
     * @return the value of public.t_login.id
     *
     * @mbg.generated Wed Aug 22 13:45:02 CST 2018
     */
    public UUID getId() {
        return id;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column public.t_login.id
     *
     * @param id the value for public.t_login.id
     *
     * @mbg.generated Wed Aug 22 13:45:02 CST 2018
     */
    public void setId(UUID id) {
        this.id = id;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column public.t_login.username
     *
     * @return the value of public.t_login.username
     *
     * @mbg.generated Wed Aug 22 13:45:02 CST 2018
     */
    public String getUsername() {
        return username;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column public.t_login.username
     *
     * @param username the value for public.t_login.username
     *
     * @mbg.generated Wed Aug 22 13:45:02 CST 2018
     */
    public void setUsername(String username) {
        this.username = username;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column public.t_login.password
     *
     * @return the value of public.t_login.password
     *
     * @mbg.generated Wed Aug 22 13:45:02 CST 2018
     */
    public String getPassword() {
        return password;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column public.t_login.password
     *
     * @param password the value for public.t_login.password
     *
     * @mbg.generated Wed Aug 22 13:45:02 CST 2018
     */
    public void setPassword(String password) {
        this.password = password;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column public.t_login.last_login_at
     *
     * @return the value of public.t_login.last_login_at
     *
     * @mbg.generated Wed Aug 22 13:45:02 CST 2018
     */
    public Date getLastLoginAt() {
        return lastLoginAt;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column public.t_login.last_login_at
     *
     * @param lastLoginAt the value for public.t_login.last_login_at
     *
     * @mbg.generated Wed Aug 22 13:45:02 CST 2018
     */
    public void setLastLoginAt(Date lastLoginAt) {
        this.lastLoginAt = lastLoginAt;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column public.t_login.user_id
     *
     * @return the value of public.t_login.user_id
     *
     * @mbg.generated Wed Aug 22 13:45:02 CST 2018
     */
    public UUID getUserId() {
        return userId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column public.t_login.user_id
     *
     * @param userId the value for public.t_login.user_id
     *
     * @mbg.generated Wed Aug 22 13:45:02 CST 2018
     */
    public void setUserId(UUID userId) {
        this.userId = userId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column public.t_login.state
     *
     * @return the value of public.t_login.state
     *
     * @mbg.generated Wed Aug 22 13:45:02 CST 2018
     */
    public ActivationState getState() {
        return state;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column public.t_login.state
     *
     * @param state the value for public.t_login.state
     *
     * @mbg.generated Wed Aug 22 13:45:02 CST 2018
     */
    public void setState(ActivationState state) {
        this.state = state;
    }
}