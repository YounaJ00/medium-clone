package org.rookedsysc.mediumclone

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.data.jpa.repository.config.EnableJpaAuditing

@EnableJpaAuditing
@SpringBootApplication
class MediumCloneApplication

fun main(args: Array<String>) {
	runApplication<MediumCloneApplication>(*args)
}
