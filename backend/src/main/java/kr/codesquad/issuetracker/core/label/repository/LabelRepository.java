package kr.codesquad.issuetracker.core.label.repository;

import kr.codesquad.issuetracker.core.label.Label;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LabelRepository extends JpaRepository<Label, Long> {

}
