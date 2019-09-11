package org.fairfield.busroute.rest;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController

public class Alert {
	List<String> a = new ArrayList<String>();

	@RequestMapping(value = "/alerts", method = RequestMethod.GET)
	public List<String> getAlertsList() {
		return a;
	}

	@RequestMapping(value = "/alerts/{alertMessage}", method = RequestMethod.POST)
	public void putAlertMessage(@PathVariable String alertMessage) {
		a.add(alertMessage);
	}

	@RequestMapping(value = "/alerts", method = RequestMethod.DELETE)
	public void clearAlertsList() {
		this.a = new ArrayList<String>();
	}
	
	@RequestMapping(value = "/alerts/{alertMessage}", method = RequestMethod.DELETE)
	public void deleteAlert(@PathVariable String alertMessage) {
		this.a.remove(alertMessage);
	}
}
